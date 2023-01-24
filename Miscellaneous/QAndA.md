# How to avoid word breaking in my list?
<span style="white-space: nowrap">no-breaks-here</span>

# How to avoid selection of text when we click mouse on label continously?
# using html attributes
<label for="input" onmousedown="return false" onselectstart="return false">Live</lable>

# using css properties
label{
   -ms-user-select:none;
   -moz-user-select:none;
   -webkit-user-select:none;
   -webkit-touch-callout: none;
   -khtml-user-select: none;
    user-select:none;
}

# How can we make "sliding of tiles" feature for the web page?