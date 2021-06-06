import general from "../config/general";
import {
  getDocument,
  parseVideos,
  parseRelatedCollections,
  parseCategories,
  parseNestedList,
} from "../utils/scrapper.utils";

const TargetService = {
  host: general.targetHost,
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
