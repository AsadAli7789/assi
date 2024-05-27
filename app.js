
var ary = [{
title : "Text Editor" ,
Description : "A text editor is a tool that allows a user to create and revise documents in a computer. Though this task can be carried out in other modes, the word text editor commonly refers to the tool that does this interactively" ,

github :"https://github.com/AsadAli7789/text-editor" ,
link:"https://asadali7789.github.io/text-editor/"},






{
    title : "Finance Tracker" ,
    Description : "A Finance Tracker is a tool that allows a user to create and revise documents in a computer. Though this task can be carried out in other modes, the word text editor commonly refers to the tool that does this interactively" ,
    
    github :"https://github.com/AsadAli7789/finance" ,
    link:"https://asadali7789.github.io/finance/"} ,
   
   
   
   
    {
        title : "calculator" ,
        Description : "A calculator is a tool that allows a user to create and revise documents in a computer. Though this task can be carried out in other modes, the word text editor commonly refers to the tool that does this interactively" ,
        
        github :"https://github.com/AsadAli7789/calculator" ,
        link:"https://asadali7789.github.io/calculator/"},
       
       
       
       
        {
            title : "Figma" ,
            Description : "A  is a tool that allows a user to create and revise documents in a computer. Though this task can be carried out in other modes, the word text editor commonly refers to the tool that does this interactively" ,
            
            github :"https://github.com/AsadAli7789/figma" ,
            link:"https://asadali7789.github.io/figma/"},

]
var cards = document.getElementById("lop")
for( var i = 0 ; i < ary.length ; i++ ) 
    {
    var div = `
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-24 mx-auto">
		  <div class="flex flex-wrap -m-4">
			<div class="p-4 lg:w-1/3">
			  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
				<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Git Hub</h2>
				<h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${ary[i].title}</h1>
				<p class="leading-relaxed mb-3">${ary[i].Description}.</p>
				<a class="text-indigo-500 inline-flex items-center" href="${ary[i].github}">Git Hub link
				  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path d="M5 12h14"></path>
					<path d="M12 5l7 7-7 7"></path>
				  </svg>
				</a>
				<a class="text-indigo-500 inline-flex items-center" href="${ary[i].link}">Website link
					<svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
					  <path d="M5 12h14"></path>
					  <path d="M12 5l7 7-7 7"></path>
					</svg>
				  </a>
                  </section>
				  ` 
lop.innerHTML += div}
