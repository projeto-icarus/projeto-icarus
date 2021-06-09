import got from "got/dist/source";
import { JSDOM } from "jsdom";
import queryString from "query-string";
import atob from "atob";

export const getDocument = async (url) => {
  const response = await got(url);
  const dom = new JSDOM(response.body);
  return dom.window.document;
};

export const parseTargetUrl = (url) => {
  const parsed = atob(queryString.parseUrl(url)?.query?.l);
  const startSlice = parsed.indexOf("http");
  const endSlice = parsed.indexOf("Í");
  return parsed.slice(startSlice, endSlice);
};

export const parseVideos = (document) =>
  [...document.querySelectorAll("#content div.card-container")].map((vid) => ({
    title: vid.querySelector("h6").textContent.trim(),
    url: parseTargetUrl(vid.querySelector("a").href),
    img: {
      src: vid.querySelector("img").src,
      alt: vid.querySelector("img").alt,
    },
    paid: [...vid.classList].includes("paid"),
    vr: Boolean(vid.querySelector(".vr-icon")),
    hd: Boolean(vid.querySelector(".hd-icon")),
    rating: vid.querySelector(".rating-procent")?.textContent.trim() || null,
    duration: vid.querySelector(".duration")?.textContent.trim() || null,
    publishedAt: vid
      .querySelector(".card-text-inner .text-truncate")
      .textContent.trim(),
    site: {
      href: vid.querySelector("a.advertiser-site").href,
      title: vid.querySelector("a.advertiser-site").textContent.trim(),
    },
  }));

export const parseRelatedCollections = (document) =>
  [...document.querySelectorAll("ul.related-list li")].map((relCat) => ({
    title: relCat.querySelector("a").textContent.trim(),
    url: relCat
      .querySelector("a")
      .href.replace("/cat/", "/category/")
      .replace("/pornstar/", "/star/")
      .split("?")[0],
  }));

export const parseCategories = (document) =>
  [...document.querySelectorAll("#content div.card")].map((cat) => ({
    title: cat.querySelector(".card-title").textContent.trim(),
    url: cat
      .querySelector("a")
      .href.replace("/cat/", "/category/")
      .split("?")[0],
    total: cat.querySelector(".total").textContent.trim(),
    img: {
      src: cat.querySelector("img").src,
      alt: cat.querySelector("img").alt.trim(),
    },
  }));

export const parseNestedList = (
  document,
  listSelector,
  groupTitleSelector = "h4"
) =>
  [...document.querySelectorAll(listSelector)].map((popCatGroup) => ({
    groupTitle: popCatGroup
      .querySelector(groupTitleSelector)
      .textContent.trim(),
    items: [...popCatGroup.querySelectorAll("li")].map((popCatItem) => ({
      title: popCatItem.querySelector("a").childNodes[0].textContent.trim(),
      url: popCatItem
        .querySelector("a")
        .href.replace("/cat/", "/category/")
        .replace("/pornstar/", "/star/")
        .replace("/pornstar-gay/", "/star/")
        .replace("/pornstar-trans/", "/star/")
        .split("?")[0],
      total: popCatItem.querySelector("span").textContent.trim(),
    })),
  }));
