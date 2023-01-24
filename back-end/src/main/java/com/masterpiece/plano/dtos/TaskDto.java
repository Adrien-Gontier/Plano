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
public class TaskDto {


    private String idTask;

    private String name;

    private String whyIPassed;

    private String whyIFailed;

    private String toDoBetter;

    private Boolean specific = false;

    private Boolean measurable = false;

    private Boolean acceptable = false;

    private Boolean realistic = false;

    private Boolean temporal = false;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date estimatedStartDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date estimatedEndDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date actualStartDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date actualEndDate;
}
