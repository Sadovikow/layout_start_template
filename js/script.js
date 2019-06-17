$(function(){
	function toggleEach(e) {
		var toggleObject = $(e).data('toggle');
		var turnOffObject = $(e).data('toggle-off');
		var option = $(e).data('on'); // yes/no

		$('.'+turnOffObject).each(function() {
			$(this).removeClass('active');
		});		
		
		$('.'+toggleObject).each(function() {
			if(option == 'yes') {
				if(!$(this).hasClass('active'))
					$(this).addClass('active');
			}
			if(option == 'no') {
				$(this).removeClass('active');
			}
		});	

	}

	// ПЕРЕКЛЮЧЕНИЕ ЛЮБЫХ БЛОКОВ (ПОЛЬЗУЙСЯ ГОЛУБЧИК)
	function toggleObject(e) {
		var toggleObject = $(e).val(); // Находим цель
		var toggleBlock = $(e).data('toggle_block'); // Объединение между выбором и блоками вывода
		$('.toggle_target[data-toggle_block="'+toggleBlock+'"]').each(function() {
			$(this).removeClass('active'); // Сначала все скрываем
		});
		//alert(toggleBlock);
		$('.toggle_target#'+toggleObject+'-content').addClass('active'); // Выводим нужный блок
	}

	$('.s-checkbox').on('click', function() {
		// Работа с чекбоксами
		if($(this).children('input').attr('type') == 'checkbox') {
			var block = $(this).children('input[type="checkbox"]');
			if(block.prop('checked') == true) {
				block.prop('checked', false);
			}
			else {
				block.prop('checked', true);
			}			
		}

		// Работа с радиобаттонами 
		if($(this).children('input').attr('type') == 'radio') {
			var name = $(this).data('name');
			console.log(name);
			$('.s-checkbox[data-name="'+name+'"]').each(function() {
				$(this).removeClass('active');
			});
			var block_check = $(this).children('input[type="radio"]');
			if(block_check.prop('checked') == true) {
				block_check.prop('checked', false);
				$(this).removeClass('active');
			}
			else {
				block_check.prop('checked', true);
				$(this).addClass('active');
			}
		}
	});

	// При нажатии на лейбл кликаем на то, для чего он
	$('label').on('click', function() {
		if($(this).attr('for') != '' && $(this).attr('for')) {
			var id = $(this).attr('for');
			$('#'+id).click();
		}
	});

	// Любые переключающиеся объекты
	// $('.toggleobject').on('click', function(e) {
	// 	// Переключение  объектов (тип доставки)
	// 	toggleObject(this);
	// });


	/* Маски */
    $("input[type='tel']").inputmask("+7(999)999-99-99",{
	    oncomplete: function(){ },
	    onincomplete: function(){ $(this).val(""); },
	    oncleared: function(){ $(this).val(""); },
    });
    $("input.date").inputmask("99.99.9999",{
        oncomplete: function(){ },
        onincomplete: function(){ $(this).val(""); },
        oncleared: function(){ $(this).val(""); },
    });
    $("input.orgn").inputmask("9999999999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
    $("input.inn").inputmask("999999999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
    $("input.kpp").inputmask("999999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
        $("input.bik").inputmask("999999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
    $("input.korr").inputmask("99999999999999999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
    $("input.rasch").inputmask("99999999999999999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
    $("input.mask_pasport").inputmask("99 99 999999",{
        oncomplete: function(){ },
        //onincomplete: function(){ $(this).val(""); },
        //oncleared: function(){ $(this).val(""); },
    });
    
	/* Маски */
});