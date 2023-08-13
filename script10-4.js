//Execute script after page is load
$(document).ready(function (e) 
{
  // click to get selected thumbnail
  $('#strip').on('click', 'img', function () 
  {
    // hold the new source
    const source = $(this).attr('src');

    // fade out the container image
    $('#container img').fadeOut('slow', function () 
    {
      // fade in the new image into the container
      $(this).attr('src', source).fadeIn('slow');
    });
    //and show the title of the particular picture
    $('#title').text($(this).attr('title'));
  });
}); // end of the document

