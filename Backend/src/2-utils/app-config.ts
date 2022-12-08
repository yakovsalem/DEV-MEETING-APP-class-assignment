class AppConfig {

}

class DevelopmentConfig extends AppConfig {
    public isDevelopment = true;
    public isProduction = false;
    public host = "localhost"; // Computer name/address of our database
    public user = "root"; // Database user
    public password = ""; // Database password
    public database = "devmeetingapp"; // Database name
    public port = 3001;
    public frontEndUrl = "http://localhost:3000";
}

class ProductionConfig extends AppConfig {
    public isDevelopment = false;
    public isProduction = true;
    public host = "0.0.0.0"; // Computer name/address of our database
    public user = ""; // Database user
    public password = ""; // Database password
    public database = ""; // Database name
    public port = 0;
    public frontEndUrl = "DevMeetingApp.com";
}

const appConfig = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default appConfig;