/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
Ext.data.JsonP.Ext_util_Format({"alternateClassNames":[],"aliases":{},"enum":null,"parentMixins":[],"tagname":"class","subclasses":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Format.html#Ext-util-Format' target='_blank'>Format.js</a></div></pre><div class='doc-contents'><p>Reusable data formatting functions</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-capitalize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-capitalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-capitalize' class='name expandable'>capitalize</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Converts the first character only of a string to upper case ...</div><div class='long'><p>Converts the first character only of a string to upper case</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to convert</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The converted text</p>\n</div></li></ul></div></div></div><div id='method-date' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-date' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-date' class='name expandable'>date</a>( <span class='pre'>value, [format]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Parse a value into a formatted date using the specified format pattern. ...</div><div class='long'><p>Parse a value into a formatted date using the specified format pattern.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>The value to format (Strings must conform to the format expected by the javascript Date object's <a href=\"http://www.w3schools.com/jsref/jsref_parse.asp\">parse()</a> method)</p>\n</div></li><li><span class='pre'>format</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Any valid date format string (defaults to 'm/d/Y')</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted date string</p>\n</div></li></ul></div></div></div><div id='method-dateRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-dateRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-dateRenderer' class='name expandable'>dateRenderer</a>( <span class='pre'>format</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Returns a date rendering function that can be reused to apply a date format multiple times efficiently ...</div><div class='long'><p>Returns a date rendering function that can be reused to apply a date format multiple times efficiently</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Any valid date format string</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The date formatting function</p>\n</div></li></ul></div></div></div><div id='method-defaultValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-defaultValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-defaultValue' class='name expandable'>defaultValue</a>( <span class='pre'>value, defaultValue</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Checks a reference and converts it to the default value if it's empty ...</div><div class='long'><p>Checks a reference and converts it to the default value if it's empty</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>Reference to check</p>\n</div></li><li><span class='pre'>defaultValue</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value to insert if it's undefined (defaults to \"\")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>value, length, word</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length ...</div><div class='long'><p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to truncate</p>\n</div></li><li><span class='pre'>length</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The maximum length to allow before truncating</p>\n</div></li><li><span class='pre'>word</span> : Boolean<div class='sub-desc'><p>True to try to find a common work break</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The converted text</p>\n</div></li></ul></div></div></div><div id='method-fileSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-fileSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-fileSize' class='name expandable'>fileSize</a>( <span class='pre'>size</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Simple format for a file size (xxx bytes, xxx KB, xxx MB) ...</div><div class='long'><p>Simple format for a file size (xxx bytes, xxx KB, xxx MB)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The numeric value to format</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted file size</p>\n</div></li></ul></div></div></div><div id='method-htmlDecode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-htmlDecode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-htmlDecode' class='name expandable'>htmlDecode</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...</div><div class='long'><p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to decode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The decoded text</p>\n</div></li></ul></div></div></div><div id='method-htmlEncode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-htmlEncode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-htmlEncode' class='name expandable'>htmlEncode</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...</div><div class='long'><p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The string to encode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The encoded text</p>\n</div></li></ul></div></div></div><div id='method-lowercase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-lowercase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-lowercase' class='name expandable'>lowercase</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Converts a string to all lower case letters ...</div><div class='long'><p>Converts a string to all lower case letters</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to convert</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The converted text</p>\n</div></li></ul></div></div></div><div id='method-math' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-math' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-math' class='name expandable'>math</a>( <span class='pre'></span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>It does simple math for use in a template, for example:\n\nvar tpl = new Ext.Template('{value} * 10 = {value:math(\"* 10...</div><div class='long'><p>It does simple math for use in a template, for example:</p>\n\n<pre><code>var tpl = new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>('{value} * 10 = {value:math(\"* 10\")}');\n</code></pre>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>A function that operates on the passed value.</p>\n</div></li></ul></div></div></div><div id='method-nl2br' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-nl2br' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-nl2br' class='name expandable'>nl2br</a>( <span class='pre'>The</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Converts newline characters to the HTML tag &lt;br/> ...</div><div class='long'><p>Converts newline characters to the HTML tag &lt;br/></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>string value to format.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The string with embedded &lt;br/> tags in place of newlines.</p>\n</div></li></ul></div></div></div><div id='method-number' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-number' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-number' class='name expandable'>number</a>( <span class='pre'>v, format</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Formats the number according to the format string. ...</div><div class='long'><p>Formats the number according to the format string.</p>\n\n<div style=\"margin-left:40px\">examples (123456.789):\n<div style=\"margin-left:10px\">\n0 - (123456) show only digits, no precision<br>\n0.00 - (123456.78) show only digits, 2 precision<br>\n0.0000 - (123456.7890) show only digits, 4 precision<br>\n0,000 - (123,456) show comma and digits, no precision<br>\n0,000.00 - (123,456.78) show comma and digits, 2 precision<br>\n0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>\nTo reverse the grouping (,) and decimal (.) for international numbers, add /i to the end.\nFor example: 0.000,00/i\n</div></div>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number to format.</p>\n</div></li><li><span class='pre'>format</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The way you would like to format this text.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted number.</p>\n</div></li></ul></div></div></div><div id='method-numberRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-numberRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-numberRenderer' class='name expandable'>numberRenderer</a>( <span class='pre'>format</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Returns a number rendering function that can be reused to apply a number format multiple times efficiently ...</div><div class='long'><p>Returns a number rendering function that can be reused to apply a number format multiple times efficiently</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Any valid number format string for <a href=\"#!/api/Ext.util.Format-method-number\" rel=\"Ext.util.Format-method-number\" class=\"docClass\">number</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The number formatting function</p>\n</div></li></ul></div></div></div><div id='method-plural' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-plural' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-plural' class='name expandable'>plural</a>( <span class='pre'>value, singular, [plural]</span> )</div><div class='description'><div class='short'>Selectively do a plural form of a word based on a numeric value. ...</div><div class='long'><p>Selectively do a plural form of a word based on a numeric value. For example, in a template,\n{commentCount:plural(\"Comment\")}  would result in \"1 Comment\" if commentCount was 1 or would be \"x Comments\"\nif the value is 0 or greater than 1.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The value to compare against</p>\n</div></li><li><span class='pre'>singular</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The singular form of the word</p>\n</div></li><li><span class='pre'>plural</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The plural form of the word (defaults to the singular with an \"s\")</p>\n</div></li></ul></div></div></div><div id='method-round' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-round' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-round' class='name expandable'>round</a>( <span class='pre'>value, precision</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Rounds the passed number to the required decimal precision. ...</div><div class='long'><p>Rounds the passed number to the required decimal precision.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The numeric value to round.</p>\n</div></li><li><span class='pre'>precision</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number of decimal places to which to round the first parameter's value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The rounded value.</p>\n</div></li></ul></div></div></div><div id='method-stripScripts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-stripScripts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-stripScripts' class='name expandable'>stripScripts</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Strips all script tags ...</div><div class='long'><p>Strips all script tags</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The text from which to strip script tags</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The stripped text</p>\n</div></li></ul></div></div></div><div id='method-stripTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-stripTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-stripTags' class='name expandable'>stripTags</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Strips all HTML tags ...</div><div class='long'><p>Strips all HTML tags</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The text from which to strip tags</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The stripped text</p>\n</div></li></ul></div></div></div><div id='method-substr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-substr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-substr' class='name expandable'>substr</a>( <span class='pre'>value, start, length</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns a substring from within an original string ...</div><div class='long'><p>Returns a substring from within an original string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The original text</p>\n</div></li><li><span class='pre'>start</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The start index of the substring</p>\n</div></li><li><span class='pre'>length</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The length of the substring</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The substring</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-trim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-trim' class='name expandable'>trim</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Trims any whitespace from either side of a string ...</div><div class='long'><p>Trims any whitespace from either side of a string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to trim</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The trimmed text</p>\n</div></li></ul></div></div></div><div id='method-undef' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-undef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-undef' class='name expandable'>undef</a>( <span class='pre'>value</span> ) : Mixed</div><div class='description'><div class='short'>Checks a reference and converts it to empty string if it is undefined ...</div><div class='long'><p>Checks a reference and converts it to empty string if it is undefined</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>Reference to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>Empty string if converted, otherwise the original value</p>\n</div></li></ul></div></div></div><div id='method-uppercase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-uppercase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-uppercase' class='name expandable'>uppercase</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Converts a string to all upper case letters ...</div><div class='long'><p>Converts a string to all upper case letters</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to convert</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The converted text</p>\n</div></li></ul></div></div></div><div id='method-usMoney' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-usMoney' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-usMoney' class='name expandable'>usMoney</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Format a number as US currency ...</div><div class='long'><p>Format a number as US currency</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The numeric value to format</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The formatted currency string</p>\n</div></li></ul></div></div></div></div></div></div></div>","superclasses":[],"meta":{},"requires":[],"html_meta":{},"statics":{"property":[],"cfg":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"Format.html#Ext-util-Format","filename":"Format.js"}],"linenr":1,"members":{"property":[],"cfg":[],"css_var":[],"method":[{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"capitalize","id":"method-capitalize"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"date","id":"method-date"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"dateRenderer","id":"method-dateRenderer"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"defaultValue","id":"method-defaultValue"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"ellipsis","id":"method-ellipsis"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"fileSize","id":"method-fileSize"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"htmlDecode","id":"method-htmlDecode"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"htmlEncode","id":"method-htmlEncode"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"lowercase","id":"method-lowercase"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"math","id":"method-math"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"nl2br","id":"method-nl2br"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"number","id":"method-number"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"numberRenderer","id":"method-numberRenderer"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"plural","id":"method-plural"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"round","id":"method-round"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"stripScripts","id":"method-stripScripts"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"stripTags","id":"method-stripTags"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"substr","id":"method-substr"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"trim","id":"method-trim"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"undef","id":"method-undef"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"uppercase","id":"method-uppercase"},{"tagname":"method","owner":"Ext.util.Format","meta":{},"name":"usMoney","id":"method-usMoney"}],"event":[],"css_mixin":[]},"inheritable":null,"private":null,"component":false,"name":"Ext.util.Format","singleton":true,"override":null,"inheritdoc":null,"id":"class-Ext.util.Format","mixins":[],"mixedInto":[]});