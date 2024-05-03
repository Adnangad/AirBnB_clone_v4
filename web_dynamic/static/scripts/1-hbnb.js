$(document).ready(function () {
  const ls = {};
  $('.checkBox').change(function () {
    const amId = $(this).data('id');
    const amnm = $(this).data('name');
    if ($(this).is(':checked')) {
      ls[amId] = amnm;
    } else {
      delete ls[amId];
    }
    const amenitiesList = Object.values(ls).join(', ');
    $('.amenities h4').text(amenitiesList);
  });
});
