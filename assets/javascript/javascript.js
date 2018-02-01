	
	var clientInfo = {
			state: "",
			first: "",
			last: "",
			llcCorp: "",
			bizName: "",
			bizIdent: "",
			bizDo: "",
			address: "",
			number: "",
			bizAddress: "",
			bizNum: "",
			email: "",
			phone: "",
			owner: "",
			manager: "",
			EIN: "",
			private: "",
			worryFree: "",
			nameCard: "",
			CCNum: "",
			exp: "",
			CVC: ""			
		};
	var review;
	var changes = {
			homePage: "",				
			state: 
				`<p class="descriptionText">Select a state</p>
				  	<select id="dropForm">
				  		<option>New States</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>`,	  	  
			firstLast: 
				`<p class="descriptionText">First Name</p>
				  	<form>
				  		<input type="text" name="fName" value="John" onfocus="if (this.value=='John') this.value='';">
				  	</form>
				  	<p class="descriptionText">Last Name</p>
				  	<form class="zenForm">
				  		<input type="text" name="lName" value="Doe" onfocus="if (this.value=='Doe') this.value='';">
				  	</form>`,
			llcCorp: 
				`<div class="boxWrapper">
				  	<div class="box Left" value="LLC">
				  		<h3 class="boxBgText">LLC</h3>
				  		<p class="boxSmText">Limited liability for owners <br> Pass though taxation <br> Flexible management <br> Minimal record kepping</p>
				  	</div>
				  	<div class="box Right" value="Corporation">
				  		<h3 class="boxBgText">Corporation</h3>
				  		<p class="boxSmText">Limited liability for owners <br> Corporate tax <br> Rigid management <br> Extensive record kepping</p>
				  	</div>			  	
			   </div>`,
			bizName: 
				`<p class="descriptionText">Business identifier</p>
			  		<form>
					  	<input type="text" name="bizName" value="ZenBusiness" onfocus="if (this.value=='ZenBusiness') this.value='';">
					</form>

				<p class="descriptionText">Business identifier</p>
					<select id="dropForm">
						<option value="LLC">LLC</option>
						<option value="Corporation">Corporation</option>
					</select>`,
			bizDo: 
				`<p class="descriptionText">Your business info</p>
			  		<form>
			  			<textarea class="bizDo" onfocus="if (this.value=='For example: We make the best beef jerky on Earth!') this.value='';">For example: We make the best beef jerky on Earth!</textarea>
			  		</form>`,
			address: 
				`<div class="addressWrapper">
			  		<div class="addForm">
			  			<form>
			  				<input id="addressInput" type="text" name="address" value="123 Address Street" onfocus="if (this.value=='123 Address Street') this.value='';">
			  			</form>
			  		</div>
			  		<div class="numForm">
			  			<form>
			  				<input id="addressInput" type="text" name="number" value="Number" onfocus="if (this.value=='Number') this.value='';">
			  			</form>
			  		</div>
			  	</div>`,
			bizAddress: 
				`<div id="ynSlider">
			  		<p id="sliderNo">No</p>
				  	 <label class="switch" for="checkbox">
					    <input type="checkbox" id="checkbox" checked/>
					    <div class="slider round"></div>
					 </label>
					 <p id="sliderYes">Yes</p>
			  	</div>`,
			contact: 
				`<p class="descriptionText">Email address</p>
				  	<form>
				  		<input type="text" name="email" value="John@sample.com" onfocus="if (this.value=='John@sample.com') this.value='';">
				  	</form>
				  	<p class="descriptionText">Phone number</p>
				  	<form class="zenForm">
				  		<input type="text" name="phone" value="555-555-5555" onfocus="if (this.value=='555-555-5555') this.value='';">
				  	</form>`,
			owner: 
				`<div class="boxWrapper">
				  	<div class="box Left" value="Yes">
				  		<h3 class="boxBgText">Yes</h3>
				  		<p class="boxSmText" id="images">I am the sole owner<br>of this business</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-23.svg">
				  	</div>
				  	<div class="box Right" value="No">
				  		<h3 class="boxBgText">No</h3>
				  		<p class="boxSmText" id="images">There are other owners<br>of this business</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-25.svg">
				  	</div>			  	
			   </div>`,
			manager: 
				`<div class="boxWrapper">
				  	<div class="box Left" value="Yes">
				  		<h3 class="boxBgText">Yes</h3>
				  		<p class="boxSmText" id="images">I am the only<br>manager</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-23.svg">
				  	</div>
				  	<div class="box Right" value="No">
				  		<h3 class="boxBgText">No</h3>
				  		<p class="boxSmText" id="images">someone else is<br>the manager</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-25.svg">
				  	</div>			  	
			   </div>`,
			great: "",
			EIN: 
				`<div class="boxWrapper">
				  	<div class="box Left" value="Yes">
				  		<h3 class="boxBgText">Yes</h3>
				  		<p class="boxSmText" id="images">I want an EIN<br>number</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-20.svg">
				  	</div>
				  	<div class="box Right" value="No">
				  		<h3 class="boxBgText">No</h3>
				  		<p class="boxSmText" id="images">I do not want an<br>EIN number</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-30.svg">
				  	</div>			  	
			   </div>`,
			private: 
				`<div class="boxWrapper">
				  	<div class="box Left" value="Yes">
				  		<h3 class="boxBgText">Yes</h3>
				  		<p class="boxSmText" id="images">Keep my<br>information<br>private!</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-11.svg">
				  	</div>
				  	<div class="box Right" value="No">
				  		<h3 class="boxBgText">No</h3>
				  		<p class="boxSmText" id="images">I am ok with my<br>information being<br>public.</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-16.svg">
				  	</div>			  	
			   </div>`,
			worryFree: 
				`<div class="boxWrapper">
				  	<div class="box Left" value="Yes">
				  		<h3 class="boxBgText">Yes</h3>
				  		<p class="boxSmText" id="images">Keep my<br>information<br>private!</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-26.svg">
				  	</div>
				  	<div class="box Right" value="No">
				  		<h3 class="boxBgText">No</h3>
				  		<p class="boxSmText" id="images">I am ok with my<br>information being<br>public.</p>
				  		<img class="boxImg" src="assets/images/ZenBusiness_MobileIcons_fullset-16.svg">
				  	</div>			  	
			   </div>`,
			cart: "",
			finsih: "",
			didItDog: ""
		};
		console.log("this is working");
	$(document).ready(function () {		
		
		$(".btn").on("click", function(){
			
            console.log(this.className);

			//Script for states page. 
			if ($(".btn").hasClass("states")) {
				console.log("states");
				//Grab data
				clientInfo.state = $("#dropForm").val();
				console.log(clientInfo.state);
				//next page
				$(".artTalk").html("Great! What's your name?");
				$(".smallTalk").html("");
				$(".section2").html(changes.firstLast);
				$(".btn").text("That's me!");
				$(".btn").removeClass("states").addClass("firstLast");
				return;
			}

			//Script for firstLast
			if ($(".btn").hasClass("firstLast")) {
				console.log("first");
				//Grab data
				clientInfo.first = $( "input[name*='fName']" ).val();
				clientInfo.last = $( "input[name*='lName']" ).val();
				console.log(clientInfo.first);
				console.log(clientInfo.last);
				//next page
				$(".artTalk").html("What kind of business do"+"<br>"+"you want to form?");
				// $("body").css("background-image", "url(assets/images/ZenBusiness_DesktopIcons_fullset_SVG-28.svg)");
				
				$(".section2").html(changes.llcCorp);
				$(".btn").hide();
				$(".btn").removeClass("firstLast").addClass("llcCorp");

				$(document).ready(function(){

					$(".Right").on("click", function() {
						$(this).addClass("active");
						console.log("Right clicked");
						$(".Left").removeClass("active");
						clientInfo.llcCorp = "Corporation";
						console.log(clientInfo.llcCorp);
						$(".btn").text("Form a Corporation").show();
					});
					$(".Left").on("click", function() {
						$(this).addClass("active");
						console.log("Left clicked");
						$(".Right").removeClass("active");
						clientInfo.llcCorp = "LLC";
						console.log(clientInfo.llcCorp);
						$(".btn").text("Form an LLC").show();
					});
					
				});
				
				return;
			}

			//Script for llcCorp
			if ($(".btn").hasClass("llcCorp")) {
				//next page
				$(".artTalk").html("What do you"+ "<br>" +"want to name"+ "<br>" +"your business?");
				$(".section2").html(changes.bizName);
				$(".btn").removeClass("llcCorp").addClass("bizName");
				$(".btn").text("Next");
				return;
			}

			//Script for bizName
			if ($(".btn").hasClass("bizName")) {
				//Grab data
				clientInfo.bizName = $("input[name*='bizName']").val();
				clientInfo.bizIdent = $("#dropForm").val();
				console.log(clientInfo.bizName);
				console.log(clientInfo.bizIdent);
				//next page
				$(".artTalk").html("Stellar name!"+ "<br>" +"What does"+ "<br>" +"your business do?");
				$(".section2").html(changes.bizDo);
				$(".btn").removeClass("bizName").addClass("bizDo").text("We're half way there!");
				return;
			}

			//Script for bizDo
			if ($(".btn").hasClass("bizDo")) {
				//Grab data
				clientInfo.bizDo = $(".bizDo").val();
				console.log(clientInfo.bizDo);
				//next page
				$(".artTalk").html("What's your"+ "<br>" +"mailing address?");
				$(".section2").html(changes.address);
				$(".btn").removeClass("bizDo").addClass("address").text("Next");
				return;
			}
			//Script for address
			if ($(".btn").hasClass("address")) {
				//Grab data
				clientInfo.address = $("#addressInput[name*='address']").val();
				clientInfo.number = $("#addressInput[name*='number']").val();
				console.log(clientInfo.address);
				console.log(clientInfo.number);
				//next page
				$(".artTalk").html("Ah "+ clientInfo.state + "!" + "<br>" +"Is " + clientInfo.address + " also your business address?");
				$(".section2").html(changes.bizAddress);
				$(".btn").removeClass("address").addClass("bizAddress");
				return;
			}

			//Script for bizAddress
			if ($(".btn").hasClass("bizAddress")) {
				//If address is the same set it = if not ask for business address
				if ($("#checkbox").prop("checked")) {
					console.log("yes");
					clientInfo.bizAddress = clientInfo.address;
					$(".artTalk").html();
					$(".section2").html(changes.contact);
					$(".btn").removeClass("bizAddress").addClass("contact");
				}else{
					console.log("no");
					$(".artTalk").html("What's your"+ "<br>" +"business address?");
					$(".section2").html(changes.address);
					$(".btn").removeClass("bizAddress").addClass("newBizAddress");
				}
				return;
								
			}

			//Script if biz address is different
			if ($(".btn").hasClass("newBizAddress")) {
				//Grab data
				clientInfo.bizAddress = $("input[name*='address']").val();
				clientInfo.bizNumber = $("#addressInput[name*='number']").val();
				console.log(clientInfo.bizAddress);
				//next page
				$(".artTalk").html("You're doing great! How"+ "<br>" +"should we get in touch" + "<br>" + "with you?");
				$(".section2").html(changes.contact);
				$(".btn").removeClass("newBizAddress").addClass("contact");
				return;
			}

			//Script for contact
			if ($(".btn").hasClass("contact")) {
				//Grab data
				clientInfo.email = $("input[name*='email']").val();
				clientInfo.phone = $("input[name*='phone']").val();
				console.log(clientInfo.email);
				console.log(clientInfo.phone);
				//next page
				$(".artTalk").html("Are you the only owner"+ "<br>" +"of the business?");
				$(".section2").html(changes.owner);
				$(".btn").removeClass("contact").addClass("owner");

				$(document).ready(function(){

					$(".Right").on("click", function() {
						$(this).addClass("active");
						console.log("Right clicked");
						$(".Left").removeClass("active");
						clientInfo.owner = "No";
						console.log(clientInfo.owner);						
					});
					$(".Left").on("click", function() {
						$(this).addClass("active");
						console.log("Left clicked");
						$(".Right").removeClass("active");
						clientInfo.owner = "Yes";
						console.log(clientInfo.owner);						
					});
					
				});
				return;
			}

			//Script for owner
			if ($(".btn").hasClass("owner")) {
					
				//next page
				$(".artTalk").html("Are you the person"+ "<br>" +"managing the business?");
				$(".section2").html(changes.manager);
				$(".btn").removeClass("owner").addClass("manager");

				$(document).ready(function(){

					$(".Right").on("click", function() {
						$(this).addClass("active");
						console.log("Right clicked");
						$(".Left").removeClass("active");
						clientInfo.manager = "No";
						console.log(clientInfo.manager);
					});
					$(".Left").on("click", function() {
						$(this).addClass("active");
						console.log("Left clicked");
						$(".Right").removeClass("active");
						clientInfo.manager = "Yes";
						console.log(clientInfo.manager);
					});
					
				});
				return;
			}

			//Script for manager
			if ($(".btn").hasClass("manager")) {
				
				//next page
				$(".artTalk").html("Great!");
				$(".smallTalk").html("Now I'm going to ask you a few"+"<br>"+"questions to personalize your"+"<br>"+"business formation with our"+"<br>"+"custom products.");
				$(".section2").html(changes.great);
				$(".btn").removeClass("manager").addClass("great");

				return;
			}

			//Script for great
			if ($(".btn").hasClass("great")) {
				//next page
				$(".artTalk").html("Do you want to add an EIN"+ "<br>" +"to your order for" + "<span id='blue'> $50?</span>");
				$(".smallTalk").html("");
				$(".section2").html(changes.EIN);
				$(".btn").removeClass("great").addClass("EIN");

				$(document).ready(function(){

					$(".Right").on("click", function() {
						$(this).addClass("active");
						console.log("Right clicked");
						$(".Left").removeClass("active");
						clientInfo.EIN = "No";
						console.log(clientInfo.EIN);
					});
					$(".Left").on("click", function() {
						$(this).addClass("active");
						console.log("Left clicked");
						$(".Right").removeClass("active");
						clientInfo.EIN = "Yes";
						console.log(clientInfo.EIN);
					});
					
				});
				return;
			}

			//Script for EIN
			if ($(".btn").hasClass("EIN")) {
				
				//next page
				$(".artTalk").html("Do you want to keep your"+ "<br>" +"information private for" +"<br>" + "<span id='blue'>$10</span> a month?");
				$(".section2").html(changes.private);
				$(".btn").removeClass("EIN").addClass("private");

				$(document).ready(function(){

					$(".Right").on("click", function() {
						$(this).addClass("active");
						console.log("Right clicked");
						$(".Left").removeClass("active");
						clientInfo.private = "No";
						console.log(clientInfo.private);
					});
					$(".Left").on("click", function() {
						$(this).addClass("active");
						console.log("Left clicked");
						$(".Right").removeClass("active");
						clientInfo.private = "Yes";
						console.log(clientInfo.private);
					});
					
				});
				return;
			}

			//Script for private
			if ($(".btn").hasClass("private")) {
				//Grab data
				clientInfo.private = $(".active").val();				
				console.log(clientInfo.private);
				//next page
				$(".artTalk").html("Would you like our worry"+ "<br>" +"free guarantee for only" +"<br>" + "<span id='blue'>$10</span> a month?");
				$(".section2").html(changes.worryFree);
				$(".btn").removeClass("private").addClass("worryFree").text("Almost done");

				$(document).ready(function(){

					$(".Right").on("click", function() {
						$(this).addClass("active");
						console.log("Right clicked");
						$(".Left").removeClass("active");
						clientInfo.worryFree = "No";
						console.log(clientInfo.worryFree);
					});
					$(".Left").on("click", function() {
						$(this).addClass("active");
						console.log("Left clicked");
						$(".Right").removeClass("active");
						clientInfo.worryFree = "Yes";
						console.log(clientInfo.worryFree);
					});
					
				});
				return;
			}

			//Script for worryFree
			if ($(".btn").hasClass("worryFree")) {
				review = `<p class="descriptionText">State</p>
				  	<form class="zenForm">
				  		<input type="text" name="state" value="${clientInfo.state}">
				  	</form>
				  	<p class="descriptionText">First Name</p>
						  	<form>
						  		<input type="text" name="fName" value="${clientInfo.first}">
						  	</form>
					<p class="descriptionText">Last Name</p>
						  	<form class="zenForm">
						  		<input type="text" name="lName" value="${clientInfo.last}">
						  	</form>
					<p class="descriptionText">Mailing Address</p>
						  	<form class="zenForm">
						  		<input type="text" name="address" value="${clientInfo.address}">
						  	</form>
					<p class="descriptionText">Business Address</p>
						  	<form class="zenForm">
						  		<input type="text" name="bizAddress" value="${clientInfo.bizAddress}">
						  	</form>
					<div class="addressWrapper">
					  		<div class="addForm">
					  			<p class="descriptionText review">Business Name</p>
							  		<form>
									  	<input class="review" type="text" name="bizName" value="${clientInfo.bizName}">
									</form>
					  		</div>
					  		<div class="numForm">
					  			<p class="descriptionText review">Identifier</p>
									<select class="review" id="dropForm">
										<option value="LLC">LLC</option>
										<option value="Corporation">Corporation</option>
									</select>
					  		</div>
					 </div>
					<p class="descriptionText">Business Purpose</p>
						  	<form class="zenForm"> 
						  		<input type="text" name="bizDo" value="${clientInfo.bizDo}">
						  	</form>
					<p class="descriptionText">Email Address</p>
						  	<form class="zenForm">
						  		<input type="text" name="email" value="${clientInfo.email}">
						  	</form>
					<p class="descriptionText">Phone Number</p>
						  	<form class="zenForm">
						  		<input type="text" name="phone" value="${clientInfo.phone}">
						  	</form>
					<p class="descriptionText">Are you the business owner?</p>
						  	<form class="zenForm">
						  		<input type="text" name="owner" value="${clientInfo.owner}">
						  	</form>
					<p class="descriptionText">Are you the business manager?</p>
						  	<form class="zenForm">
						  		<input type="text" name="manager" value="${clientInfo.manager}">
						  	</form>`,
				//next page
				$(".artTalk").html("Information review");
				$(".section2").html(review);
				$(".btn").removeClass("worryFree").addClass("review").text("Next");
				console.log(clientInfo);
				return;
			}
			//Script for review
			if ($(".btn").hasClass("review")) {
				//Show data
				
				//next page
				$(".artTalk").html("Shopping cart");
				$(".section2").html(changes.cart);
				$(".btn").removeClass("review").addClass("cart").text("Finish and pay");
				return;
			}

			//Script for cart
			if ($(".btn").hasClass("cart")) {
				//Show data

				//Grab data
				clientInfo.nameCard = $("input[name*='nameCard']").val();
				clientInfo.CCNum = $("input[name*='CCNum']").val();
				clientInfo.exp = $("input[name*='exp']").val();
				clientInfo.CVC = $("input[name*='CVC']").val();				
				//next page
				$(".artTalk").html("Wasn't that easy?");
				$(".smallTalk").html("Let your friends know you just"+"<br>" +"started your business with"+"<br>" +"ZenBusiness.");
				$(".section2").html(changes.finish);
				$("body").css("background-image", "url(../images/ZenBusiness_DesktopIcons_fullset_SVG-28.svg)");
				$(".btn").removeClass("cart").addClass("finish").text("Skip");
				return;
			}

			//Script for finish
			if ($(".btn").hasClass("finish")) {
				//twitter FB stuff
				
				//next page
				$(".artTalk").html("You did it!");
				$(".smallTalk").html("Thank you for using ZenBusiness to"+"<br>" +"help form your company. You should"+"<br>" +"receive a welcome email shortly.");
				$(".section2").html(changes.firstLast);
				$(".btn").removeClass("finish").addClass("didItDog").text("Done");
				return;
			}

			//Script for didItDog
			if ($(".btn").hasClass("didItDog")) {
				//I don't know
				return;
			}

		});
				

	});
	