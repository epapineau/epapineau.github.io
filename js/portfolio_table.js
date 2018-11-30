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
                var site = "<td>Unhosted</td>";
            }
            else{
                var site = `<td><a href = "${project.Hosted}" target = "_blank">X</a></td>`;
            }
            if (project.Github_Repository === "NA"){
                var git = "Private Repo";
            }
            else {
                var git = `<td><a href = "${project.Github_Repository}" target = "_blank">X</a></td>`;
            }
            
            var htmlRow = `${img} ${proj} ${desc} ${site} ${git}`;
            return htmlRow
        });
});