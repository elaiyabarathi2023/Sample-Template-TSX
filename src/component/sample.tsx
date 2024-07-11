
interface CategoryData {

  [key: string]: string[] | CategoryData | never[]; // Updated to allow nested subcategories

}
 
interface SubCategoryData {

  [key: string]: string[] | string; // Updated to allow nested subcategories

}
 
interface Data {

  categories: CategoryData;

}
 
class DataSingleton {

  private static instance: DataSingleton;

  private data: Data;
 
  private constructor() {

    this.data = {

      categories: {

        Developer: {

          web: {

            dotnet: [

              "ASP.NET",

              "WinForms",

              "WPF",

              "WCF",

              "ASP.NET Core",

              "Blazor",

              "Xamarin",

              ".NET Core/.NET 5+",

              "ML.NET:",

              "Azure Services",

              "Entity Framework",

            ],

            java: [

              "Java SE ",

              "Java EE ",

              "Spring Framework",

              "Hibernate",

              "Servlets and JSP",

              "JavaFX",

              "JPA",

              "JUnit",

              "Apache Maven",

              "Apache Tomcat,",

              "Eclipse IDE",

            ],

            JavaScript: [

              "React",

              "Angular",

              "Vue.js",

              "jQuery",

              "Bootstrap",

              "Node.js",

            ],

            Python: [],

            "C#": [],

            "C++": [],

            Ruby: [],

            PHP: [],

            Go: [],

            Rust: [],

            TypeScript: [],

            SQL: [],

            Scala: [],

            "Shell Scripting": [],

          },
 
          mobile: {

            android: ["Kotlin", "java"],

            ios: ["Swift", "OjectiveC"],

            flutter: ["subnode1", "subnode2"],

          },

          Devops: {

            ".automation": ["subnode1", "subnode2"],

            Manual: ["subnode1", "subnode2"],

          },

        },

        Testing: {

          ".automation": ["subnode1", "subnode2"],

          Manual: ["subnode1", "subnode2"],

        },

      },

    };

  }
 
  public static getInstance(): DataSingleton {

    if (!DataSingleton.instance) {

      DataSingleton.instance = new DataSingleton();

    }

    return DataSingleton.instance;

  }
 
  public getData(): Data {

    return this.data;

  }

}
 
export default DataSingleton;
