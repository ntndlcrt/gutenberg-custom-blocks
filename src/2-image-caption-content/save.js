import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div class="left">
				<p className="caption">{props.attributes.caption}</p>
				<div className="image-wrapper">
					<div className="overlay"></div>
					<img
						src={props.attributes.pictureURL}
						alt={props.attributes.pictureAlt}
					/>
				</div>
			</div>
			<div className="right">
				<RichText.Content
					tagName="div"
					className="content"
					value={props.attributes.content}
					style={{ textAlign: props.attributes.alignment }}
				/>
			</div>
		</div>
	);
}
