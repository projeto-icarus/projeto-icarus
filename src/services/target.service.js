import {
  getDocument,
  parseVideos,
  parseRelatedCollections,
  parseCategories,
  parseNestedList,
} from "../utils/scrapper.utils";
import queryString from "query-string";

const TargetService = {
  host: process.env.TARGET_HOST,
  index: async (query) => {
    let qs = "";
    if (query) {
      qs = "?" + queryString.stringify(query);
    }
    const document = await getDocument(TargetService.host + qs);

    return {
      mainCategories: parseCategories(document),
      popularCategories: parseNestedList(
        document,
        'div.category-list:not([id="popular-pornstars"]) li.category-group'
      ),
      popularPornstars: parseNestedList(
        document,
        "div.category-list#popular-pornstars li.category-group"
      ),
    };
  },
  category: async (slug) => {
    const document = await getDocument(`${TargetService.host}/cat/${slug}`);

    return {
      videos: parseVideos(document),
      relatedCategories: parseRelatedCollections(document),
    };
  },
  categories: async (query) => {
    let qs = "";
    if (query) {
      qs = "?" + queryString.stringify(query);
    }
    const document = await getDocument(`${TargetService.host}/a-z${qs}`);

    return {
      categories: parseNestedList(document, "div.category-group", "h3"),
    };
  },
  star: async (slug) => {
    const document = await getDocument(
      `${TargetService.host}/pornstar/${slug}`
    );

    return {
      videos: parseVideos(document),
      relatedStars: parseRelatedCollections(document),
    };
  },
  stars: async (query) => {
    let qs = "";
    if (query) {
      qs = "?" + queryString.stringify(query);
    }
    const document = await getDocument(`${TargetService.host}/pornstar${qs}`);

    return {
      stars: parseNestedList(document, "div.category-group", "h3"),
    };
  },
  new: async () => {
    const document = await getDocument(`${TargetService.host}/new`);

    return {
      videos: parseVideos(document),
    };
  },
  popular: async () => {
    const document = await getDocument(`${TargetService.host}/popular`);

    return {
      videos: parseVideos(document),
    };
  },
  rating: async () => {
    const document = await getDocument(`${TargetService.host}/rating`);

    return {
      videos: parseVideos(document),
    };
  },
};

export default TargetService;
