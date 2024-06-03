<?php
//if (!is_user_logged_in()) {
?>

<br />
<br />

<?php
$colsArr = isset($attributes['colsArr']) ? $attributes['colsArr'] : array();
$rowsArr = isset($attributes['rowsArr']) ? $attributes['rowsArr'] : array();
?>


<?php

$colors = array(
	'#f00a55',
	'#f00aa1',
	'#0aa5f0',
	'#0af0d0',
	'#720af0',
	'#f06b0a',

);
?>


<style>
	.a-link {
		color: dodgerblue
	}

	.t_th {
		color: white;
		text-align: center !important;
		padding: 50px;
		font-size: 30px;
		font-weight: bold;
	}
</style>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="relative overflow-x-auto" dir={"rtl"}>
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<?php
					foreach ($colsArr as $index => $col) {

					?>
						<th scope="col" class="px-6 py-3 t_th" style=" <?php echo $index == 0 ? '' : 'background-color:' . (isset($colors[$index]) ? $colors[$index] : 'purple') ?> ;">
							<?php echo esc_html($col); ?>
						</th>
					<?php

					}
					?>

				</tr>
			</thead>
			<tbody>

				<?php
				foreach ($rowsArr as $row) {

				?>
					<tr classs="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<?php
						for ($colIndex = 0; $colIndex < count($row); $colIndex++) {
							$col = $row[$colIndex];

						?>

							<?php if ($colIndex >= count($colsArr)) { ?>

							<?php } else { ?>

								<td classs="px-6 py-4">

									<?php if (
										!$col["type"] ||
										($col["type"] == "text")
									) { ?>
										<?php echo esc_html($col["text"]); ?>

									<?php }  ?>


									<?php if (
										$col["type"] && $colIndex != 0 && $col["type"] == "button"
									) {

										$url = isset($col["url"]) ? $col["url"] : '';
									?>
										<a href="<?php echo $url; ?>" class="a-link">
											<?php echo esc_html($col["text"]); ?>
										</a>
									<?php }  ?>


									<?php if (
										$col["type"] && $colIndex == 0 && $col["type"] == "button"
									) { ?>
										<?php echo esc_html($col["text"]); ?>
									<?php }  ?>


								</td>

							<?php } ?>




						<?php

						}
						?>

					</tr>
				<?php

				}
				?>

				<tr>
					<td colspan="10">

						<?php

						// Default arguments
						$args = array(
							'status'            => array('draft', 'pending', 'private', 'publish'),
							'type'              => array_merge(array_keys(wc_get_product_types())),
							'parent'            => null,
							'sku'               => '',
							'category'          => array(),
							'tag'               => array(),
							'limit'             => get_option('posts_per_page'),  // -1 for unlimited
							'offset'            => null,
							'page'              => 1,
							'include'           => array(),
							'exclude'           => array(),
							'orderby'           => 'date',
							'order'             => 'DESC',
							'return'            => 'objects',
							'paginate'          => false,
							'shipping_class'    => array(),
						);

						// Array of product objects
						$products = wc_get_products($args);
						?>

						<select id="planselect">
							<?php

							foreach ($products as $product) {
							?>
								<option value="<?php echo $product->get_id(); ?>">
									<?php echo $product->get_name(); ?>
									<?php if ($product->get_price() == 0) {
										echo 'رایگان';
									} else {
										echo number_format($product->get_price()) . ' تومان ';
									}
									?>
								</option>

							<?php } ?>
						</select>

						<a style="display: none;" id="addtocart" href="" target="_blank"></a>
						<button style="background-color: #720af0;" onclick="function addToCartButton(){

		let id = document.querySelector('#planselect').value;
			let url = `https://gomegamega.com/checkout/?add-to-cart=${id}&quantity=1`
			const addtocart=document.querySelector('#addtocart')
			addtocart.setAttribute('href',url);

			document.getElementById('addtocart').click();

		};addToCartButton()" class="button button-primary">تهیه اشتراک</button>
					</td>
				</tr>



			</tbody>
		</table>



	</div>
</div>




<?php
// } else {

/*
<h3><?php echo __("Already Logged in ", "mjkh-otp")  ?></h3>
<br />
<a href="<?php echo site_url()  ?>/dashboard"><?php echo __("Access Dashboard", "mjkh-otp")  ?></a>

<script>
		//window.location.href = '<?php echo site_url()  ?>/dashboard'
</script>

*/
?>




<?php

//}
?>
