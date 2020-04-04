import Amplify from "aws-amplify";

export const environment = {
	production: true,
	API_URL: "https://dev.dailyobjects.com/api",
};

Amplify.configure({
	Auth: {
		region: "ap-southeast-1",
		userPoolId: "ap-southeast-1_alN2zJI7E",
		userPoolWebClientId: "1k884cupjl4i4akudt7gsl6l1p",
	},
});

Amplify.Logger.LOG_LEVEL = "WARN";
