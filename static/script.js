/**
 * Created by rishabhshukla on 09/03/17.
 */
$(function () {
    $('#submit').click(function () {
        var url = $('#url').val();
        $.post('/api/v1/shorten', {
            url:url
        },function (data) {
            $('#shortcode').html("Your Short URL is Here: " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
        })
    })
})