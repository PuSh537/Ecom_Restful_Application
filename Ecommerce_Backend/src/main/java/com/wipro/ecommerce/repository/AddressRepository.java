package com.wipro.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.ecommerce.dto.AddressDTO;
import com.wipro.ecommerce.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

	Address saveAll(AddressDTO addressDTO);

}
