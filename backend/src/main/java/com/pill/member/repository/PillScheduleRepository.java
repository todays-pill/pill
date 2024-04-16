package com.pill.member.repository;

import com.pill.member.domain.PillSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PillScheduleRepository extends JpaRepository<PillSchedule,Long> {
}
