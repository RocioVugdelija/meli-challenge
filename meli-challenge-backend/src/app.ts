import express from 'express';
import cors from 'cors';
import { formatItemDetails, getAuthor, getCategoriesData, getCategoryIdWithMaxResults, getItemDescriptionData, getItemDetailsData, getSearchResultsData, mapItemsResults } from './methods';
import httpStatus from 'http-status';

const app = express();
const port = 5000;

app.use(cors());


// Search all items
app.get("/api/items", async (req, res) => {
  try{
      const query = req.query.q?.toString();
      if (query){
        const {data} = await getSearchResultsData(query);
        const categoryData  = data.filters.find((f) => f.id ==="category") || data.available_filters.find((f) => f.id ==="category");
        if (!categoryData) {
          throw new TypeError('The categories were not found'); //this is just for typescript
        }
        const categoryID = getCategoryIdWithMaxResults(categoryData?.values);
        const categoriesResponse = await getCategoriesData(categoryID);
        const categories = categoriesResponse.data.path_from_root.map((c) => c.name)
        const items = mapItemsResults(data);
        res.json({
          author: getAuthor(),
          categories: categories,
          items: items,
        });
      } else{
        res.status(httpStatus.PRECONDITION_FAILED).send({
          message: "Ha habido un problema con la query"
        });
      }
  } catch {
      res.status(httpStatus.NOT_FOUND).send({
        message: "Ha habido un error en la búsqueda"
      });
  }
});

// Search one item details
app.get("/api/items/:id", async (req, res) => {
  try{
    const itemId = req.params.id;
    const {data} = await getItemDetailsData(itemId);
    const categoriesResponse = await getCategoriesData(data.category_id);
    const categories = categoriesResponse.data.path_from_root.map((c) => c.name)
    const descriptionData = await getItemDescriptionData(itemId);
    const description = descriptionData.data.plain_text;
    const item = formatItemDetails(data, description);

    res.json({
      author: getAuthor(),
      categories: categories,
      item: item,
    });
  } catch {
    res.status(httpStatus.NOT_FOUND).send({
      message: "Ha habido un error en la búsqueda"
    });
}
});

app.listen(5000, () => console.log(`Mercado Libre app listening at http://localhost:${port}`));
