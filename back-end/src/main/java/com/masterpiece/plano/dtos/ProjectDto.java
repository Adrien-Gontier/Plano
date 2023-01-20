package com.masterpiece.plano.dtos;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProjectDto {

    private String idProject;

    private String name;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date deadLineDate;
}
