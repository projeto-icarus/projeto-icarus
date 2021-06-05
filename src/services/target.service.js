import {
  getDocument,
  parseVideos,
  parseRelatedCollections,
  parseCategories,
  parseNestedList,
} from "../utils/scrapper.utils";

const TargetService = {
  host: process.env.TARGET_HOST,
  index: async () => {
    const document = await getDocument(TargetService.host);

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
  categories: async () => {
    const document = await getDocument(`${TargetService.host}/a-z`);

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
  stars: async () => {
    const document = await getDocument(`${TargetService.host}/pornstar`);

    return {
      stars: parseNestedList(document, "div.category-group", "h3"),
    };
  },
};

export default TargetService;
