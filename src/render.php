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

<?php

$colors = array(
	'#f00a55',
	'#e9115e',
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
	<div class="" dir={"rtl"}>
		<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<?php
					foreach ($colsArr as $index => $col) {

					?>
						<th scope="col" class="px-6 py-3 t_th" style=" <?php echo $index == 0 ? 'color:black' : 'background-color:' . (isset($colors[$index]) ? $colors[$index] : 'purple') ?> ;">
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

					<?php

					//echo print_r($rowsArr);

					if (count($rowsArr) > 0)
						for ($colIndex = 0; $colIndex <= 3; $colIndex++) {
							$col = $row[$colIndex];

					?>

						<?php if ($colIndex >= count($colsArr)) { ?>


						<?php } else if ($colIndex == 0) { ?>
							<td></td>
						<?php } else { ?>
							<td>

								<select id="planselect<?php echo $colIndex ?>">

									<option selected="selected">انتخاب کنید</option>
									<?php

									foreach ($products as $product) {

										if ($colIndex == 1 && str_contains($product->get_name(), "GOLDMEGA")) {
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

										<?php
										} else if ($colIndex == 2 && str_contains($product->get_name(), "EUROMEGA")) {
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

										<?php
										} else if ($colIndex == 3 && str_contains($product->get_name(), "GOLDFISH")) {
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

									<?php
										}
									} ?>
								</select>

								<a style="display: none;" id="addtocart" href="" target="_blank"></a>
								<button style="<?php echo 'background-color:' . (isset($colors[$colIndex]) ? $colors[$colIndex] : '#e9115e') ?>" onclick="function addToCartButton(){

		let id = document.querySelector('#planselect<?php echo $colIndex ?>').value;

			if(parseInt(id)){

				let url = `https://gomegamega.com/checkout/?add-to-cart=${id}&quantity=1`
				const addtocart=document.querySelector('#addtocart')
				addtocart.setAttribute('href',url);

				document.getElementById('addtocart').click();
			}
		};addToCartButton()" class="button button-primary">تهیه اشتراک</button>
							</td>

						<?php

							}
						?>

					<?php

						}
					?>
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




<?php/*
// Ensure the user is logged in
$user=wp_get_current_user();
$subs=YWSBS_Subscription_Helper::get_instance()->get_subscriptions_by_user( $user->ID);
$subscription_status_list = ywsbs_get_status();

foreach ( $subs as $subscription_post ) {

$subscription_id       = is_numeric( $subscription_post ) ? $subscription_post : $subscription_post->ID;
$subscription          = ywsbs_get_subscription( $subscription_id );
$subscription_name     = sprintf( '%s - %s', $subscription->get_number(), $subscription->get( 'product_name' ) );
$subscription_status   = $subscription_status_list[ $subscription->get_status() ];
$next_payment_due_date = ( ! in_array( $subscription_status, array( 'paused', 'cancelled' ), true ) && $subscription->get( 'payment_due_date' ) ) ? date_i18n( wc_date_format(), $subscription->get( 'payment_due_date' ) ) : '<span class="empty-date">-</span>';
$start_date            = ( $subscription->get( 'start_date' ) ) ? date_i18n( wc_date_format(), $subscription->get( 'start_date' ) ) : '<div class="empty-date">-</div>';
$end_date              = ( $subscription->get( 'end_date' ) ) ? date_i18n( wc_date_format(), $subscription->get( 'end_date' ) ) : false;
$end_date              = ! $end_date && ( $subscription->get( 'expired_date' ) ) ? date_i18n( wc_date_format(), $subscription->get( 'expired_date' ) ) : date("Y-m-d");

	if($subscription->get_status() !='active'){
		continue;
	}


	// Calculate remaining time
	$start = new DateTime(date("Y-m-d"));
	$today = new DateTime(date("Y-m-d"));
	$end = new DateTime($end_date);

	if($today >= $start &&  $end >=$today){
	}else{
		continue;
	}


	// Get the product from the subscription
	$product = $subscription->get_product();
	if ($product) {
		// Display product details
		echo sprintf(
			'Product ID: %d, Name: %s, Price: %s',
			$product->get_id(),
			$product->get_name(),
			$product->get_price_html()
		);
		echo '<br/>';
	}
	// Calculate the difference
	$interval = $today->diff($end);

	// Calculate the total number of days
	$total_days = $interval->days;

	// Convert days to weeks
	$weeks = floor($total_days / 7);

	// Calculate remaining days after accounting for full weeks
	$remaining_days = $total_days % 7;

	echo  sprintf(
		'%d weeks, %d days remaining , status:%d  ,ywsbs_get_status :%d ,get_status:%d',
		$weeks,
		$remaining_days,
		$subscription_status,
		ywsbs_get_status(),
		$subscription->get_status()
	);

	echo '$subscription_status:'.$subscription_status.' ywsbs_get_status:'.	ywsbs_get_status().	' get_status:'.$subscription->get_status();
echo '<br/>------------------------<br/>';



}*/
?>
