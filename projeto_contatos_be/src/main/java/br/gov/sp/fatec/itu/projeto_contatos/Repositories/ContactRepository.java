package br.gov.sp.fatec.itu.projeto_contatos.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.gov.sp.fatec.itu.projeto_contatos.Entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

    List<Contact> findByNameContainingIgnoreCase(String name);

    List<Contact> findByPhoneContaining(String phone);

    List<Contact> findByEmailContainingIgnoreCase(String email);

}
