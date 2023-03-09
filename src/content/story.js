/**
 * Wrapper for JSON formated story, since importing image as module is
 * not supported there. In production where images are direct links from
 * CMS, this wrapper is then not needed.
 */
import story from "./story.json";
import imgStoryAside from "../assets/story-aside.png";
import imgStoryAvatar from "../assets/story-avatar.png";

story[0].quoteAvatar = imgStoryAvatar;
story[1].img = imgStoryAside;
export default story;
