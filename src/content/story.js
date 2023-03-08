/**
 * Wrapper for JSON formated story, since importing image as module is
 * not supported there. In production where images are direct links from
 * CMS, this wrapper is then not needed.
 */
import story from "./story.json";
import imgStoryAside from "../assets/story-aside.png";

story[0].img = imgStoryAside;
export default story;
