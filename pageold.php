<?php 
 get_header();?>

<?php 
$newsCat=get_terms(['taxonomy'=>'news_category','hide_empty'=>'false','orderby'=>'name','order'=>'DESC']);
print_r($newsCat);

foreach ($newsCat as $newsCatData) {
  echo  $meta_image = get_wp_term_image($newsCatData->term_id); 

?>

<div>
<h3><?php echo $newsCatData-> name?></h3>
</div>

<?php } ?>

<?php  

$wpnew=array(
    'post_type'=>'news',
    // 'post_status'=>'publish'
    'posts_per_page'=> -1
);

$newsquery=new Wp_Query($wpnew);
while($newsquery->have_posts()) {
       $newsquery->the_post();

?> 

<div>
    <h2>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the</h2>
    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </h3>
</div>
<?php } ?>

<?php get_sidebar();


?>





<?php get_footer();?>

