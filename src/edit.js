/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InnerBlocks,
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	PanelBody,
	TextControl,
	ToggleControl,
	Button,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useState, useEffect } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const DEBUG_MODE = location.origin.indexOf('localhost')>=0;
const Log = (...data) => {
	if (DEBUG_MODE == true) {
		console.log(data);
	}
}


export default function Edit({ attributes, setAttributes }) {
	const { rows, cols, colsArr, rowsArr } = attributes;
	/*useEffect(() => {
		if (!rows) {
			setAttributes({rows: 2})
		}
		if (!cols) {
			setAttributes({cols: 2})
		}

		setAttributes({colsArr: Array.from({length: cols}, (_, index) => index)})
		setAttributes({rowsArr: Array.from({length: rows}, (_, index) => index)})

	}, [rows, cols, colsArr, rowsArr])*/

	if (!rows) {
		setAttributes({ rows: 2 });
	}
	if (!cols) {
		setAttributes({ cols: 2 });
	}

	if (!colsArr)
		setAttributes({ colsArr: Array.from({ length: cols }, (_, index) => "") });
	if (!rowsArr)
		setAttributes({
			rowsArr: Array.from({ length: rows }, (_, index) => {
				text: "";
			}),
		});

	const addRow = (type) => {
		Log("addRow", addRow, rowsArr);
		if (!rowsArr)
			setAttributes({
				colsArr: Array.from({ length: rows }, (_, index) => {
					text: "simple text";
				}),
			});

		const newRowsArr = [...rowsArr];

		let arr = [];
		if (colsArr)
			for (let i = 0; i < colsArr.length; i++) {
				if (type == "button") {
					arr.push({ text: "click on me", type: type });
				} else {
					arr.push({ text: "simple text", type: type });
				}
			}

		newRowsArr.push(arr);

		setAttributes({ rowsArr: newRowsArr });
	};

	const addColumn = () => {
		Log("addColumn", addColumn, colsArr);
		if (!colsArr)
			setAttributes({
				colsArr: Array.from({ length: cols }, (_, index) => "simple text"),
			});

		const newColsArr = [...colsArr];
		newColsArr.push("simple text");

		setAttributes({ colsArr: newColsArr });

		fixMatrix(newColsArr);
	};

	const fixMatrix = (newColsArr) => {
		if (!newColsArr || !rowsArr) {
			setAttributes({ colsArr: [], rowsArr: [] });
			return;
		}
		const newRowsArr = [...rowsArr];

		if (DEBUG_MODE) {
			debugger;
		}

		for (let i = 0; i < newRowsArr.length; i++) {
			for (let j = 0; j < newColsArr.length; j++) {
				if (!newRowsArr[i][j]) {
					if (!newRowsArr[i][0]) {
						newRowsArr[i][j] = { text: "simple text", type: "text" };
					} else {
						newRowsArr[i][j] = {
							text: "simple " + newRowsArr[i][0].type,
							type: newRowsArr[i][0].type,
						};
					}
				}
				Log("i=" + i, "j=" + j, newRowsArr[i][j]);
			}
			Log("=======================i=");
			Log("i=" + i, newRowsArr[i]);
		}

		Log(newRowsArr);
		setAttributes({ rowsArr: newRowsArr });
	};

	const removeRow = () => {
		Log("removeColumn", removeRow, rowsArr);
		if (!rowsArr)
			setAttributes({
				colsArr: Array.from({ length: rows }, (_, index) => ""),
			});

		const newRowsArr = [...rowsArr];
		newRowsArr.pop();

		setAttributes({ rowsArr: newRowsArr });
	};
	const removeColumn = () => {
		Log("removeColumn", removeColumn, colsArr);
		if (!colsArr)
			setAttributes({
				colsArr: Array.from({ length: cols }, (_, index) => ""),
			});

		const newColsArr = [...colsArr];
		newColsArr.pop();

		setAttributes({ colsArr: newColsArr });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "copyright-date-block")}>
					<Button text="افزودن ستون" onClick={() => addColumn()} />

					<Button text="حذف ستون" onClick={() => removeColumn()} />
					<Button text="افزودن ردیف" onClick={() => addRow("text")} />
					<Button text="حذف ردیف" onClick={() => removeRow()} />

					<Button text="افزودن باتن" onClick={() => addRow("button")} />

					<div class="table-responsive">
						<table class="table table-primary">
							<thead>
								<tr>
									<th scope="col">عنوان</th>
									<th scope="col">آدرس</th>
								</tr>
							</thead>
							<tbody>

								{rowsArr &&
									rowsArr.map((row, rowIndex, arr) => (
										<>
											{row
												.filter((f) => f.type == "button")
												.map((col, colIndex) =>
													colIndex == 0 || colIndex >= colsArr.length ? (
														<></>
													) : (
														<tr class="">
															<td scope="row">
																<TextControl
																	value={rowsArr[rowIndex][colIndex].text}
																	onChange={(value) => {
																		rowsArr[rowIndex][colIndex].text = value;
																		const newArr = [...rowsArr];
																		setAttributes({ newArr });
																	}}
																/>
															</td>
															<td>
																<TextControl
																	value={rowsArr[rowIndex][colIndex].url}
																	onChange={(value) => {
																		rowsArr[rowIndex][colIndex].url = value;
																		const newArr = [...rowsArr];
																		setAttributes({ newArr });
																	}}
																/>
															</td>
														</tr>
													),
												)}
										</>
									))}
							</tbody>
						</table>
					</div>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div class="relative overflow-x-auto" dir={"rtl"}>
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								{colsArr &&
									colsArr.map((item, index, arr) => (
										<>
											<th scope="col" class="px-6 py-3">
												<RichText
													tagName="p"
													onChange={(value) => {
														colsArr[index] = value;
														setAttributes({ colsArr });
													}}
													value={colsArr[index]}
													placeholder={__(
														"Write your paragraph...",
														"my-custom-block",
													)}
												/>
											</th>
										</>
									))}
							</tr>
						</thead>
						<tbody>
							{rowsArr &&
								rowsArr.map((item, index, arr) => (
									<>
										<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
											{colsArr &&
												colsArr.map((item, j, arr) => (
													<>
														{j == 0 && (
															<th
																scope="row"
																className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
															>
																<RichText
																	tagName="p"
																	onChange={(value) => {
																		if (!rowsArr[index][j]) {
																			rowsArr[index][j] = {};
																		}
																		rowsArr[index][j].text = value;
																		setAttributes({ rowsArr });
																	}}
																	value={rowsArr[index][j].text}
																	placeholder={__(
																		"Write your paragraph...",
																		"my-custom-block",
																	)}
																/>
															</th>
														)}

														{/* 	{Log(
															rowsArr,
															index,
															j,
															'row:'+rowsArr[index][j],
															'type:'+(rowsArr[index][j] ? rowsArr[index][j].type : '' ),
														)} */}
														{j != 0 &&
															rowsArr[index] &&
															rowsArr[index][j] &&
															rowsArr[index][j].type === "text" && (
																<th className="px-6 py-4">
																	<RichText
																		tagName="p"
																		onChange={(value) => {
																			if (!rowsArr[index][j]) {
																				rowsArr[index][j] = {};
																			}
																			rowsArr[index][j].text = value;
																			setAttributes({ rowsArr });
																		}}
																		value={rowsArr[index][j].text}
																		placeholder={__(
																			"Write your paragraph...",
																			"my-custom-block",
																		)}
																	/>
																</th>
															)}

														{j != 0 &&
															rowsArr[index] &&
															rowsArr[index][j] &&
															rowsArr[index][j].type === "button" && (
																<th className="px-6 py-4">
																	<Button
																		isPrimary
																		href="{rowsArr[index][j].url}"
																	>
																		{rowsArr[index][j].text}
																	</Button>
																</th>
															)}
													</>
												))}
										</tr>
									</>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
