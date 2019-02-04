## AACN_FORM Development Docs

This form requires promises - infact any asynchronous component will <br>
to be working on host platform. Therefore we will ned to polyfill promises for ie11.<br>
Originally thought this could be done with 'bluebird' but that didn't seem to work<br>
So we must use a global pollyfill and a global fetch item.


Object spread parameter is being polyfilled by Object assign but that isnt supported by ie11