package com.pill.pillschedule.repository;

import com.pill.pillschedule.domain.ScheduleDay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleDayRepository extends JpaRepository<ScheduleDay, Long> {
}
