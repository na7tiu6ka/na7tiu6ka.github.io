function createEmailSending() {

    $('.btn-submit').click(function() {
        var nameFieldText = $('#name').val();
        var emailFieldText = $("#email").val();
        var messageFieldText = $('#message').val().replace(/\r?\n/g, '<br />');
        var myFullEmail = $('.mea').html().trim();
        $('.btn-submit').attr('disabled', 'disabled');
        
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': '4JxKjzyCxMWZH5ETt_1ttQ',
                'message': {
                    'from_email': emailFieldText,
                    'from_name': nameFieldText,
                    'to': [{
                        'email': myFullEmail,
                        'type': 'to'
                    }],
                    'autotext': 'true',
                    'subject': 'Contact from portfolio site',
                    'html': messageFieldText
                }
            }
        }).done(function(response) {
            alert('Your email has been successfully sent!'); // if you're into that sorta thing
            setTimeout(function() {
      			$('input[type="submit"]').removeAttr('disabled');
			}, 2000);
        });
    });

};