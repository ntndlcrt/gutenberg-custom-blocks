import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("adelcourte/image-caption", {
	edit: Edit,
	save,
});
