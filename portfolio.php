<!DOCTYPE html>
<html lang="en">
	<head>
    	<title>Projects by Dennis Xiao</title>

		<!-- include all the css and js files -->
		<?php include 'headFiles.php';?>

	    <!-- Weather CSS -->
	    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.3.2/css/weather-icons.min.css"/>

	    <!-- JQuery UI -->
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>	 

		<!-- Activate JQuery UI Tooltip -->
		<script>
		    $(document).tooltip({
		        content:function(){
		            return this.getAttribute("title");
		        },
		        position: {
			        my: "center bottom",
			        at: "center top"
    			}
		    });
  		</script>   

	</head>
  	<body>
  
		<!-- body container -->
		<div id="container" class="container-fluid">
	  
			<!-- navigation section -->
			<?php include 'nav.php';?>

				<div id="sectionContainer">

					<h1 class="pageHeadline">Previous Achievements <i class="fa fa-thumbs-o-up" aria-hidden="true"></i></h1>

					<p class="aboutContent">I have worked on over 50 sites over the years. Many of them are long gone or have been replaced. Here are a few that have yet to bite the dust.</p>

					<p class="aboutContent">2010 - 2016 @ <a href="http://www.studygroup.com/" target="_blank">Study Group</a></p>

					<a href="http://www.anucollege.edu.au/" target="_blank">ANU College</a> |				
					<a href="http://www.csustudycentres.edu.au/" target="_blank">Charles Sturt University Study Centres</a> |
					<a href="http://isc.flinders.edu.au/" target="_blank">Flinders International Study Centre</a> |
					<a href="http://www.taylorscollege.edu.au/" target="_blank">Taylors College</a> |
					<a href="http://www.afy.ac.nz/" target="_blank">Auckland Foundation</a> |
					<a href="http://www.taylorsperth.edu.au/" target="_blank">Taylors College Perth</a> |
					<a href="https://coursefinder.studygroup.com/" target="_blank">Course Finder</a>

					<p class="aboutContent" style="margin-top: 10px;">2009 - 2010 @ <a href="http://www.chinatelecomglobal.com/" target="_blank">China Telecom</a></p>

					<a href="http://www.189mv.cn/" target="_blank">YXT Movie</a>

					<h1 class="pageHeadline">Gadget Collection <i class="fa fa-gamepad" aria-hidden="true"></i></h1>

					<p class="aboutContent" style="margin-bottom: 30px;">All the gadgets that I made during my journey to become a better web developer. <i class="fa fa-graduation-cap" aria-hidden="true"></i></p>

					<div class="flexContainer">

						<div class="portfolioItem">
							<a href="./projects/weather/weather.html" target="_blank">
								<i class="wi wi-day-snow-thunderstorm" style="font-size: 4.0em;" title="<div style='text-align:center;'><b>Weather App</b> <br /> HTML + CSS + Angular 1</div>"></i>
							</a>
						</div>	

						<div class="portfolioItem">
							<a href="./projects/quote/quoteoftheday.html" target="_blank">
								<i class="fa fa-quote-left" style="font-size: 5.0em;" title="<div style='text-align:center;'><b>Quote Machine</b> <br /> HTML + CSS + JQuery</div>"></i>
							</a>
						</div>		
						
						<div class="portfolioItem">
							<a href="./projects/porfolio/dennisxiao.html" target="_blank">
								<i class="fa fa-suitcase" style="font-size: 4.7em;" title="<div style='text-align:center;'><b>Porfolio Landing Page</b> <br /> HTML + CSS + JQuery</div>"></i>
							</a>
						</div>							

						<div class="portfolioItem">
							<a href="./projects/fixed-bg-ldp/fixed-bg-ldp.html" target="_blank">
								<i class="fa fa-globe" style="font-size: 4.7em;" title="<div style='text-align:center;'><b>Fixed Background Landing Page</b> <br /> HTML + CSS</div>"></i>
							</a>
						</div>	

						<div class="portfolioItem">
							<a href="./projects/jane/jane.html" target="_blank">
								<i class="fa fa-video-camera" style="font-size: 4.7em;" title="<div style='text-align:center;'><b>Jane Farewell Video</b> <br /> HTML + CSS + Javascript</div>"></i>
							</a>
						</div>										

					</div> <!-- end of portfolio container -->

				</div>

			<!-- footer section -->
			<?php include 'footer.php';?>

		</div><!-- end of body container -->

  	</body>
</html>