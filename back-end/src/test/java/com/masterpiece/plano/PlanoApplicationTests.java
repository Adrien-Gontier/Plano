package com.masterpiece.plano;

import com.masterpiece.plano.entity.Project;
import lombok.SneakyThrows;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;



import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;



@SpringBootTest
class PlanoApplicationTests {
	
	@SneakyThrows
	@Test
	void testCreateProject() {

		String projectId = "e9a43514-a881-11ed-afa1-0242ac120002";
		String name = "Test-project";
		String description = "the description";
		String dateString = "2022-01-01";
		Date dateDeadLine = new SimpleDateFormat("yyyy-MM-dd").parse(dateString);
		String whyIPassed = "I passed";
		String whyIFailed = "I Failed";
		String toDoBetter = "To do better";
		Project project = new Project(projectId, name, description, dateDeadLine, whyIPassed, whyIFailed, toDoBetter);

		assertEquals(projectId, project.getProjectId());
		assertEquals(name, project.getName());
		assertEquals(description, project.getDescription());
		assertEquals(dateDeadLine, project.getDateDeadLine());
		assertEquals(whyIPassed, project.getWhyIPassed());
		assertEquals(toDoBetter, project.getToDoBetter());
	}



}
