var markEd;
var countryEd;
var OpenModalAdd;
var CloseModalAdd;
var OpenModalShow;
var CloseModalShow;
var OpenModalEdit;
var CloseModalEdit;
OpenModalAdd = function(){
	$('#myModalAdd').css('display', 'block');
}
CloseModalAdd = function(){
	$('#myModalAdd').css('display', 'none');
}
$('.AddACar').click(function(){
	$('.MainUl').append('<li class="MainLi"><p class="AddInpP" onclick="OpenModalShow()">' + $('.AddInp').val()+'</p>' +
	'<button class="delete">X</button><button class="Edit" onclick="OpenModalEdit()">Edit</button><p class="CountyP">'+$('.SelAdd').val()+'</p>'	)
})
$('.MainUl').on('click', '.delete', function(){
	$(this).parent().remove();
});
OpenModalShow = function(){
	$('#myModalShow').css('display', 'block');
}
CloseModalShow = function(){
	$('#myModalShow').css('display', 'none');
	$('.TitleShow').text('');
	$('.PShow').text('');
}
$('.MainUl').on('click', '.AddInpP', function(){
	$('.TitleShow').append($(this).text());
	$('.PShow').append('Country: '+$(this).next().next().next().text())
})
$('.NewCarShow').click(function(){
	$(this).after('<br><div class="w3-yellow ModelDiv"><h4>Add a Model</h4><input type="text" class="AddModelInp"><button class="AddModelBtn">Add New Model</button></div>');
})
$('#myModalShow').on('click', '.AddModelBtn', function(){
	$('.ModelUl').append('<li>' + $('.AddModelInp').val() + '<button class="DeleteModel"> X</button></li>')
})
$('.ModelUl').on('click', '.DeleteModel', function(){
	$(this).parent().remove();
})
$('.showclose').click(function(){
	$('.AddModelInp').val('');
})
OpenModalEdit = function(){
	$('#myModalEdit').css('display', 'block');
}
CloseModalEdit = function(){
	$('#myModalEdit').css('display', 'none');
}
	$('.MainUl').on('click', '.Edit', function(){
		markEd = $(this).prev().prev();
		countryEd = $(this).next()
		$('.InpEdit').val(markEd.html());
		$('.SelEdit').val(countryEd.html());
		$('.EditSave').click(function(){
		markEd.html($('.InpEdit').val());
		countryEd.html($('.SelEdit').val())
})
	})

