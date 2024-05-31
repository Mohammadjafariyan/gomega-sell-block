/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { rowsArr, colsArr } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="relative overflow-x-auto" dir={"rtl"}>
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							{colsArr &&
								colsArr.map((col, colIndex) => (
									<th key={colIndex} scope="col" className="px-6 py-3">
										<RichText.Content tagName="p" value={col} />
									</th>
								))}{" "}
						</tr>
					</thead>
					<tbody>


						{rowsArr &&
							rowsArr.map((row, rowIndex) => (
								<tr
									key={rowIndex}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								>
									{row.map((col, colIndex) =>
										colIndex >= colsArr.length ? (
											<></>
										) : (
											<td key={colIndex} className="px-6 py-4">
												<RichText.Content tagName="p" value={col} />
											</td>
										),
									)}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
