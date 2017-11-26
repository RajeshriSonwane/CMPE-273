	var numArray = [ "69", "85", "65", "10" ];
	var i, j, tempVar;
	
	console.log("The array elements are : " + numArray);
	for (i = 0; i < numArray.length; i++) 
	{
		for(j = i+1 ; j < numArray.length ; j++)
		{
			if(numArray[i]>numArray[j])
			{
				tempVar =numArray[i];
				numArray[i]=numArray[j];
				numArray[j]=tempVar;				
			}
		}
	}
	console.log("Sorted Array : " + numArray);
		