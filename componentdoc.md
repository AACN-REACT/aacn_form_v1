## AACN_FORM Development Docs

This form requires promises - infact any asynchronous component will <br>
to be working on host platform. Therefore we will ned to polyfill promises for ie11.<br>
Originally thought this could be done with 'bluebird' but that didn't seem to work<br>
So we must use a global pollyfill and a global fetch item.


Object spread parameter is being polyfilled by Object assign but that isnt supported by ie11


## Problems faced

#Select cascades options on other fields

We can make options on other fields dependent on the choice of one field <br>


Fields whose options are dependent on other fields' choices are to have a<br>
a 'parent' property that points to their parent field.

Other than that we have to link the parent's choices to the choices on  <br>
the child field, this will be done through a filter key when the choices <br>
are supplied as a list from data.

parent.choice.key => filter child.choice.key

This means that we will have to store the filter key in state alongside it <br>

The form should also allow the filtering to be done by more direct rules, <br>
with the child choice being manually wired to the parent choice within the <br>
config object

