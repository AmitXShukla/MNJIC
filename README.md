<h4>MNJIC</h4>
Angular Material and PHP MYSQL App<br>
<h4>Objective:</h4><br>
In this Project, We will build an mobile App for one of our client MNJIC.<br>
We will develop this app for Android devices and will register this on Google Play.
<h4>Business Requirement:</h4>
MNJIC already has a PHP application using MYSQL database. Their requirement is to maintain (add,edit and delete) a list of Students IDs, their Names, Scores with Session IDs.
<h4>Tools:</h4>
We will using Angular, Angular Materials for UI. PHP and MYSQL for backend.<br>
Also, we will try to use Ionic Capactiory new release to create a mobile app from Angular Codebase.<br>
We will also try to use Apache Cordova for the same purpose as a back up plan.
<h4>Let's Get Started</h4>

I assume you already have a successful Angular Development environment already setup and 
if not, please visit 

<a href="https://github.com/AmitXShukla/Angular-Capacitor-Firebase-Setup" target="_blank">Angular Development Environment Setup</a><br>
<a href="https://github.com/AmitXShukla/Angular-Material" target="_blank">Angular Material Setup</a><br>

<h4>Develpment Tasks:</h4>
<span style="color:green">VSCODE > Terminal > node -v</span>  // show current node version installed<br>
<span style="color:green">npm -v</span> // show current npm version<br>
<span style="color:green">ng -v</span> // show current Angular-Cli version<br>
<span style="color:green">ng new MNJIC</span> // create a new ng app<br>
<span style="color:green"> cd MNJIC</span><br>
<h4> Clean up tasks:</h4><br>
<span style="color:green">copy over favicon.ico in assets/icon directory</span><br>
<span style="color:green">update index.html to reflect new favicon.ico changes</span><br>
<span style="color:green">update polyfill.json</span><br> - In case of using web animations or if you are planning to support older browser versions.<br>
<span style="color:green">and in case of adding a polyfill, please make sure to npm install related package for chosen polyfill.</span><br>
<span style="color:green"><h4>update gitignore file</h4></span><br>
- Please include files/folder which you do not wish to include to Git Repository like < dist > or < node_modules > folder
OR environment.ts, environment.prod.ts etc<br>

<h4>update Angular-cli.json settings </h4>
<span style="color:green">"prefix": "app" </span><br>
get rid of "app" prefix, otherwise, this setting will prefix, all selector with this string, like FooterComponent will have selector = app-footer
<br>
<h4> Step 2: Install Angular Materials</h4>
<span style="color:green">npm install --save @angular/material @angular/cdk @angular/animations hammerjs</span><br>

<h4> Step 4. Include a theme</h4>
add this to styles.css or copy this over to assets/css directory<br>

<span style="color:green">@import "~@angular/material/prebuilt-themes/indigo-pink.css";</span><br>
<span style="color:green"> ng serve</span><br>

_________________________

<h4>Development Tasks</h4>
create routes.ts<br>

<span style="color:green">ng g interface shared/routes</span><br>

<h4> replace routes.ts text with </h4>
https://github.com/AmitXShukla/Angular-Material/blob/master/src/app/shared/routes.ts<br>

<h4> include APP_ROUTES</h4> from shared/routes.ts to app.module.ts  <br>
<span style="color:green">(add to IMPORT section)</span><br>

<h4>create custom material module</h4>
<span style="color:green">ng g module shared/custom.material</span><br>

<h4>copy below content to custom.material.ts file</h4>

https://github.com/AmitXShukla/Angular-Material/blob/master/src/app/shared/custommaterial/custommaterial.module.ts<br>

<h4>update app.module.ts</h4> to include ElishCustomMaterialModule in IMPORT section <br>
<span style="color:green">(add to IMPORT section)</span><br>

<h4>Now You have all Angular Material dependencies installed.</h4>

_________________________

<h4>Define Website Content and requirements</h4>
This website will need a top tool bar.<br>

Top tool bar should also include a mat-icon and header/title text for the page being displayed in middle.<br>
At right most side of tool bar, it should include mat-icons for email, settings and social icon for contact.<br>

<b><i> All mat-icons must have a tool tip displayed</i></b><br>

At the bottom of the page, a footer needs to be included.<br>
This footer will have copyright statement and include all navigation links for SEO rendering.<br>

_________________________

<h4>Development tasks</h4>
Now it's time to add header and footer components<br>

create a new footer <br>

<span style="color:green">ng g component shared/footer</span><br>

update footer.html with this text<br>
<span style="color:green">copyright 2018, www.elishconsulting.com</span><br>

<span style="color:green">import FOOTER Component to app.module.ts  (add to <declarations> section)</span><br>

update app.component.html file and include at last<br>

<span style="color:green">< footer >< /footer ></span><br>

<span style="color:green"> ng serve</span><br>

at this point to make sure, app displays footer statement and is running fine.<br>

<h4>add a new header</h4>

Open app.component.ts and<br>

Include tool bar code<br>

Include material icons<br>

Include Left Navigation<br>

Fix, person_add mat-icon to include links from social plugin<br>

register a new custom svgicon<br>

Fix Left-Hand navigation<br>

Create one page and link to this page to router-outlet and routes.ts<br>

<h4>Register a new custom svgicon</h4>

in case of error, include HttpClientModule<br>


<span style="color:green">Convert all MAT-ICON for offline use</span><br>

----------------------------------------------------
<h4>host PHP API Code to support data fetch</h4>
<h4>fetch PHP data in Angular Material Data Table</h4>