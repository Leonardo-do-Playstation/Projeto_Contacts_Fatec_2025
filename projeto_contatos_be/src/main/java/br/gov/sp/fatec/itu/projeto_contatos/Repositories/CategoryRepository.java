package br.gov.sp.fatec.itu.projeto_contatos.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import br.gov.sp.fatec.itu.projeto_contatos.Entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
