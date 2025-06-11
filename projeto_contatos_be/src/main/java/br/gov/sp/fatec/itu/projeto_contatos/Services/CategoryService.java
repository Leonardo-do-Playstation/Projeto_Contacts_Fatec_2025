package br.gov.sp.fatec.itu.projeto_contatos.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.gov.sp.fatec.itu.projeto_contatos.Entities.Category;
import br.gov.sp.fatec.itu.projeto_contatos.Repositories.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category getById(int id) {
        return categoryRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Category not found"
            ));
    }

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }
}
