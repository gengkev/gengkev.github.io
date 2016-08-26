document.addEventListener('DOMContentLoaded', function() {
  // gimme my email (also regex bc why not)
  var matches = location.host.match(/^[^\.]+/);
  if (!matches) return;
  var email = matches[0] + '@gmail.com';

  // innerHTML is a sin :o
  var span = document.getElementById('email_thing');
  span.innerHTML = '';

  // the only real way to set text :')
  var a = document.createElement('a');
  a.setAttribute('href', 'mailto:' + email);
  a.appendChild(document.createTextNode(email));
  span.appendChild(a);
});
