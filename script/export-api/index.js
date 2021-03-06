const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
	files = fs
		.readdirSync(dirPath)
		.filter((x) => !(x.includes(".ts") || x.includes(".map")));

	arrayOfFiles = arrayOfFiles || [];

	files.forEach(function (file) {
		console.log("dirpath ", dirPath);
		if (fs.statSync(dirPath + "/" + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
		} else {
			arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
		}
	});

	return arrayOfFiles;
};

const getAllApiConfigs = (fileNames, jsonFileName) => {
	// const dirPath = "../../packages/api/lib/proxy/Service";
	// const fileNames = fs
	// 	.readdirSync(dirPath)
	// 	.filter((x) => !(x.includes(".ts") || x.includes(".map")));

	let apiConfigList = [];
	for (fileName of fileNames) {
		console.log(fileName);
		const { config } = require(fileName);
		console.log(config);
		apiConfigList.push(config);
	}

	fs.writeFileSync(
		`./nextRelease/${jsonFileName}.json`,
		JSON.stringify(apiConfigList)
	);
};

const serviceConfigFileNames = getAllFiles(
	"../../packages/api/lib/proxy/Service"
);
const bizApiConfigFileNames = getAllFiles(
	"../../packages/api/lib/proxy/BizApi"
);

getAllApiConfigs(serviceConfigFileNames, "service");
getAllApiConfigs(bizApiConfigFileNames, "bizapi");
