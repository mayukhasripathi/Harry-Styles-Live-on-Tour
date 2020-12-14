var gallery = ["https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/11/1521071491-untitled.jpg","https://talentrecap.com/wp-content/uploads/2020/06/Harry-Styles-concert.png","https://www.nme.com/wp-content/uploads/2018/06/harry-styles-shania-twain-cover-madison-square-garden.jpg"];

console.log(gallery);

gallery.forEach(function(a, b){
	$('.pictures').append("<img src=" + gallery[b] + ">");
});

	

$(".button").click(function(){
	var storage =$(".addInput").val();
    gallery.push(storage);
    $("body").append("<img src=" + storage + ">");
    $("addInput").val("");
    $('.body').empty();
});