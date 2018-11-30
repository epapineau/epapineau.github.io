// Load data from project.csv
d3.csv("/data/projects.csv", function(error, projects){
    // Log an error if one exists
    if (error) return console.warn(error);

    // Define table
    var table = d3.select("tbody")
        .selectAll("tr")
        .data(projects)
        .enter()
        .append("tr")
        .html(function(project){
            var proj = `<td>${project.Project_Name}</td>`;
            var img = `<td><img src = "${project.Project_img}" alt = "${proj} Preview">`;
            var desc = `<td>${project.Project_Description}</td>`

            // Links, if available
            if (project.Hosted === "NA"){
                var symbol = '<i class="fas fa-check-circle fa-lg" style="color:Green"></i>';
                var site = "<td ><center>Unhosted<center></td>";
            }
            else{
                var site = `<td class="align-middle"><center><a href = "${project.Hosted}" target = "_blank">X</a><center></td>`;
            }
            if (project.Github_Repository === "NA"){
                var symbol = '<i class="fas fa-file-code fa-lg" style="color:lightgrey"></i>';
                var git = `<td class="align-middle"><center>${symbol}<center></td>`;
            }
            else {
                var symbol = '<i class="fas fa-file-code fa-lg"></i>';
                var git = `<td class="align-middle"><center><a href = "${project.Github_Repository}" target = "_blank">${symbol}</a><center></td>`;
            }
            
            var htmlRow = `${img} ${proj} ${desc} ${site} ${git}`;
            return htmlRow
        });
});