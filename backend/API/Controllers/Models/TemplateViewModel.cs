using DataAccess.Data.Models.EF;

namespace API.Controllers.Models;

public class TemplateViewModel
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;
    public string Target { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string Type { get; set; } = null!;
    public string Subgroup { get; set; } = null!;
    public string Group { get; set; } = null!;
    public string Requirement { get; set; } = null!;
    public string Warning { get; set; } = null!;
    public string Information { get; set; } = null!;
    public string Icon { get; set; } = null!;
    public bool Searchable { get; set; }
    public string? Image { get; set; }

    public static TemplateViewModel FromDbModel(Template template)
    {
        return new TemplateViewModel
        {
            Id = template.Id,
            Name = template.Name,
            Target = template.Target ?? string.Empty,
            Description = template.Description ?? string.Empty,
            Type = template.Type,
            Subgroup = template.Subgroup,
            Group = template.Group,
            Requirement = template.Requirement ?? string.Empty,
            Warning = template.Warning ?? string.Empty,
            Information = template.Information ?? string.Empty,
            Icon = template.Icon,
            Searchable = template.Searchable,
            Image = template.Image
        };
    }
}