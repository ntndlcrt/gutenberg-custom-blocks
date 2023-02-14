import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	AlignmentToolbar,
	BlockControls,
} from "@wordpress/block-editor";
import { Placeholder, Button, TextControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit(props) {
	const blockProps = useBlockProps();

	const onSelectImage = (picture) => {
		props.setAttributes({
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		});
	};

	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		});
	};

	return (
		<div {...blockProps}>
			<div class="left">
				<TextControl
					value={props.attributes.caption}
					onChange={(caption) => props.setAttributes({ caption })}
					placeholder={__("Write a caption", "adelcourte-gutenberg")}
				/>
				{!props.attributes.pictureID ? (
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["image"]}
							value={props.attributes.pictureID}
							render={({ open }) => (
								<Placeholder
									icon="images-alt"
									label={__("Background image", "adelcourte-gutenberg")}
									instructions={__("Select a picture", "adelcourte-gutenberg")}
								>
									<Button isLarge onClick={open} icon="upload">
										{__("Import", "adelcourte-gutenberg")}
									</Button>
								</Placeholder>
							)}
						/>
					</MediaUploadCheck>
				) : (
					<>
						<img
							src={props.attributes.pictureURL}
							alt={props.attributes.pictureAlt}
						/>
						<Button onClick={onRemoveImage} icon="dismiss">
							{__("Remove picture", "adelcourte-gutenberg")}
						</Button>
					</>
				)}
			</div>
			<div class="right">
				<BlockControls>
					<AlignmentToolbar
						value={props.attributes.alignment}
						onChange={(alignment) => props.setAttributes({ alignment })}
					/>
				</BlockControls>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={__("Write your content here", "adelcourte-gutenberg")}
					value={props.attributes.content}
					className="content"
					onChange={(content) => props.setAttributes({ content })}
					allowedFormats={["core/bold", "core/italic", "core/link"]}
					style={{ textAlign: props.attributes.alignment }}
				/>
			</div>
		</div>
	);
}
