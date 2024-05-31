/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n'
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
	InspectorControls
} from '@wordpress/block-editor'

import {
	PanelBody,
	TextControl,
	ToggleControl,
	Button
} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'
import {useState, useEffect} from '@wordpress/element'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const {rows, cols, colsArr, rowsArr} = attributes
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
		setAttributes({rows: 2})
	}
	if (!cols) {
		setAttributes({cols: 2})
	}

	if (!colsArr)
		setAttributes({colsArr: Array.from({length: cols}, (_, index) => '')})
	if (!rowsArr)
		setAttributes({rowsArr: Array.from({length: rows}, (_, index) => '')})


	const addRow = ()=>{
		console.log('addColumn',addColumn,rowsArr)
		if (!rowsArr)
			setAttributes({colsArr: Array.from({length: rows}, (_, index) => '')})

		const newRowsArr=[...rowsArr];
		newRowsArr.push([]);

		setAttributes({rowsArr:newRowsArr})

	}
	const addColumn = ()=>{
		console.log('addColumn',addColumn,colsArr)
		if (!colsArr)
			setAttributes({colsArr: Array.from({length: cols}, (_, index) => '')})

		const newColsArr=[...colsArr];
		newColsArr.push('');

		setAttributes({colsArr:newColsArr})

	}

	const removeRow = ()=>{
		console.log('removeColumn',removeRow,rowsArr)
		if (!rowsArr)
			setAttributes({colsArr: Array.from({length: rows}, (_, index) => '')})


		const newRowsArr=[...rowsArr];
		newRowsArr.pop();

		setAttributes({rowsArr:newRowsArr})

	}
	const removeColumn = ()=>{
		console.log('removeColumn',removeColumn,colsArr)
		if (!colsArr)
			setAttributes({colsArr: Array.from({length: cols}, (_, index) => '')})


		const newColsArr=[...colsArr];
		newColsArr.pop();

		setAttributes({colsArr:newColsArr})

	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'copyright-date-block')}>
					<Button text='افزودن ستون' onClick={()=>addColumn()}/>

					<Button text='حذف ستون' onClick={()=>removeColumn()}/>
					<Button text='افزودن ردیف' onClick={()=>addRow()}/>
					<Button text='حذف ردیف' onClick={()=>removeRow()}/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div class='relative overflow-x-auto' dir={'rtl'}>
					<table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
						<thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							{colsArr && colsArr.map((item, index, arr) => (
								<>
									<th scope='col' class='px-6 py-3'>
										<RichText
											tagName='p'
											onChange={value => {
												colsArr[index] = value
												setAttributes({colsArr})
											}}
											value={colsArr[index]}
											placeholder={__(
												'Write your paragraph...',
												'my-custom-block'
											)}
										/>
									</th>

								</>
							))}
						</tr>
						</thead>
						<tbody>
						{rowsArr && rowsArr.map((item, index, arr) => (
							<>
								<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
									{colsArr && colsArr.map((item, j, arr) => (
										<>

											{j ==0  &&
												<th
													scope='row'
													className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
												>
													<RichText
														tagName='p'
														onChange={value => {
															rowsArr[index][j] = value
															setAttributes({rowsArr})
														}}
														value={rowsArr[index][j]}
														placeholder={__(
															'Write your paragraph...',
															'my-custom-block'
														)}
													/>
												</th>}

											{j !=0  &&
												<th
													className='px-6 py-4'
												>
													<RichText
														tagName='p'
														onChange={value => {
															rowsArr[index][j] = value
															setAttributes({rowsArr})
														}}
														value={rowsArr[index][j]}
														placeholder={__(
															'Write your paragraph...',
															'my-custom-block'
														)}
													/>


												</th>}


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
	)
}
