import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<p className="caption">{props.attributes.caption}</p>
			<div className="image-wrapper">
				<div className="overlay"></div>
				<img
					src={props.attributes.pictureURL}
					alt={props.attributes.pictureAlt}
				/>
			</div>
		</div>
	);
}
