package com.tweetapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tweetapp.model.Reply;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {

}
