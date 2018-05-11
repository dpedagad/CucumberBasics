package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:/Users/dpedagad/workspace/CucumberBasics/src/main/java/Features", //the path of the feature files
		glue={"stepDefinitions"}, //the path of the step definition files
				format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},//To generate diiferent reports in different formats
						monochrome = true, //display the console output in a proper readable format
						strict = true, //it will check if any step is not defined in step definition file
						dryRun = false
						//dryRun = true doesn't let the script to execute, it just checks whether mapping is done properly b/w feature files and stepDefinition or not 
		)
public class TestRunner {

}
